-- revision: c5c4ae30
-- requires: dc0af35b


create table if not exists payout_run (
    id bigint primary key generated always as identity (start with 1),
    created_by text not null unique
    created_at timestamptz not null,
);

alter table customer_info add column payout_run_id bigint references payout_run(id) on delete cascade;
alter table customer_info add column error text;
alter table customer_info add column payout_export boolean default false not null;


-- explicit customer view
create or replace view customer as
    select
        a.*,
        c.customer_account_id,
        c.iban,
        c.account_name,
        c.email,
        c.donation,
        c.error,
        c.payout_run_id
    from account_with_history a
    left join customer_info c on (a.id = c.customer_account_id);

-- payout view: customers where payout already happened or is pending
create or replace view payout as
    select
        c.customer_account_id,
        c.iban,
        c.account_name,
        c.email,
        c.user_tag_uid,
        (c.balance - c.donation) as balance,
        c.payout_run_id
    from customer c
    where
        c.iban is not null and
        round(c.balance, 2) > 0 and
        round(c.balance - c.donation, 2) > 0 and
        -- c.payout_run_id is null and
        c.payout_export and
        c.error is null;
